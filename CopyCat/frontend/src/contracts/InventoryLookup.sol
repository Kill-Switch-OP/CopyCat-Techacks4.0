// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
 

contract InventoryLookup {

mapping (string => uint256) public myInventory;

function setNameNAmount(string memory _name, uint256 _amount) public {
        myInventory[_name] = _amount;
    }

function getAmount(string memory _name) public view returns (uint) {
        return myInventory[_name];
    }
}