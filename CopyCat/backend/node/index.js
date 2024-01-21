import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import { create } from 'ipfs-http-client';
import { Readable } from 'stream';
import Level from 'level';
import cors from 'cors';

const app = express();
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:1234"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));
const client = create({ url: 'http://127.0.0.1:5001/api/v0' });
const clientDB = new Level.Level('clientLookupMap', { valueEncoding: 'json' })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/artist/upload', upload.single('file'), async (req, res) => {
  try {
    const { result_key, owner } = req.body;
    // Check if the key exists in LevelDB
    clientDB.get(result_key, async (err, value) => {
      if (err && !err.notFound) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      if (value) {
        console.log("Song Already Exists!");
        res.status(403).json({error: `Song Already Exists.`,owner:value.owner,cid:value.cid});
      } else {
        if (!result_key) {
          return res.status(400).json({ error: 'Both file and result_key are required.' });
        }
        
        const fileBuffer = req.file.buffer;
        const readableStream = Readable.from(fileBuffer);
        console.log(readableStream);

        const result = await client.add(readableStream);

        console.log(result);

        // Create JSON content for the block
        const blockContent = {
          key: result_key,
          audio: result.cid.toString(),
          owner: owner  // Replace with the actual address of the owner
        };

        // Convert JSON content to buffer
        const blockBuffer = Buffer.from(JSON.stringify(blockContent));

        // Upload the JSON block to IPFS
        const blockResult = await client.add(blockBuffer);

        console.log(blockResult);

        // Add the key to LevelDB
        await clientDB.put(result_key, {"owner":owner,"cid":blockResult.cid.toString()} || "DefaultOwner");

        res.json({ cid: result.cid.toString(), result_key: result_key, block_cid: blockResult.cid.toString() });
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 1234;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});