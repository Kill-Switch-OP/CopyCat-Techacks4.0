from conductor.client.http.models import Task, TaskResult
from conductor.client.http.models.task_result_status import TaskResultStatus
from conductor.client.worker.worker_interface import WorkerInterface
from conductor.client.configuration.configuration import Configuration
from conductor.client.configuration.settings.authentication_settings import AuthenticationSettings
from conductor.client.automator.task_handler import TaskHandler
from conductor.client.worker.worker import Worker
from conductor.client.worker.worker_task import WorkerTask


SERVER_API_URL = 'https://play.orkes.io/api'
KEY_ID = '6aaf9fa7-d8b2-430d-9509-d33dcea5fc83'
KEY_SECRET = '2wKhaOL7GU8DeMntT5oVn4m5R1uvq0kcvia0D6yGtU0Os365'

class SimplePythonWorker(WorkerInterface):
    def execute(self, task: Task) -> TaskResult:
        task_result = self.get_task_result_from_task(task)
        print(task.input_data)
        task_result.status = TaskResultStatus.COMPLETED
        return task_result

    def get_polling_interval_in_seconds(self) -> float:
        # poll every 500ms
        return 0.5
    

configuration = Configuration(
server_api_url=SERVER_API_URL,
debug=True,
authentication_settings=AuthenticationSettings(
    key_id=KEY_ID,
    key_secret=KEY_SECRET
),
)

workers = [
    SimplePythonWorker(
        task_definition_name='recognize'
    )
]

# with TaskHandler(workers, configuration, scan_for_annotated_workers=False) as task_handler:
    # task_handler.start_processes()
    # task_handler.join_processes()