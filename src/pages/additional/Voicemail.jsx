import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { server } from "../../App";
import { Link } from "react-router-dom";

const VoicemailBox = () => {
  const [voicemailData, setVoicemailData] = useState({
    description: "",
    email: "",
    record_vm: "yes",
    notify_novm: "yes",
  });
  const [voicemailList, setVoicemailList] = useState([]);
  const [selectedVoicemail, setSelectedVoicemail] = useState("");
  const [show, setShow] = useState(false);

  const fetchVoicemailList = useCallback(async () => {
    try {
      const response = await axios.get(`${server}/api/numbers/voicemails`);
      if (response.data && response.data.voicemailbox) {
        setVoicemailList(response.data.voicemailbox);
      }
    } catch (error) {
      console.error("Error fetching voicemail list:", error);
    }
  }, []);

  useEffect(() => {
    fetchVoicemailList();
  }, [fetchVoicemailList]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setVoicemailData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (checked ? 'yes' : 'no') : value
    }));
  };

  const handleCreateNew = async () => {
    try {
      await axios.post(`${server}/api/numbers/voicemails/new`, voicemailData);
      fetchVoicemailList();
      setShow(false);
    } catch (error) {
      console.error("Error creating voicemail:", error);
    }
  };

  const handleViewEdit = async () => {
    setShow("edit");
    const selected = voicemailList.find(vm => vm.id === selectedVoicemail);
    if (selected) {
      setVoicemailData({
        description: selected.description,
        email: selected.email || "",
        record_vm: selected.record_vm,
        notify_novm: selected.notify_novm,
      });
    }
  };

  const handleSaveChanges = async () => {
    try {
      await axios.post(`${server}/api/numbers/voicemail/update`, {
        id: selectedVoicemail,
        ...voicemailData
      });
      fetchVoicemailList();
      setShow(false);
    } catch (error) {
      console.error("Error updating voicemail config:", error);
    }
  };

  return (
    <div className="w-11/12 bg-white p-8 rounded-lg shadow-lg">
      <div className="flex flex-col gap-1 px-12 rounded-lg py-6 items-start bg-[#f5f5f5]">
        <h1 className="text-lg">
          <Link to="/admin" className="text-lg"> Tamar Home </Link> / Control panel home /
        </h1>
        <h2 className="text-5xl">Voice Mail</h2>
      </div>

      <div className="p-5">
        <h4 className="text-lg font-semibold text-[#382e62] mb-4">Select an existing voicemail box or create new</h4>
        <p className="text-sm mb-4">To view or to make changes to an existing voicemail box, select the name of the voicemail box from the dropdown and select View/Edit. To create a new box, select "Create new".</p>
        <div className="flex items-center space-x-4">
          <select
            className="w-1/2 h-10 border rounded-l-lg px-4 focus:outline-none"
            value={selectedVoicemail}
            onChange={(e) => setSelectedVoicemail(e.target.value)}
          >
            <option value="">Select a Voicemail</option>
            {voicemailList.map((voicemail) => (
              <option key={voicemail.id} value={voicemail.id}>
                {voicemail.description}
              </option>
            ))}
          </select>
          <button
            className="bg-yellow-300 h-10 w-24 flex justify-center items-center text-black rounded-lg"
            onClick={handleViewEdit}
            disabled={!selectedVoicemail}
          >
            View/Edit
          </button>
          <button
            className="bg-[#382e62] h-10 w-28 flex justify-center items-center text-white rounded-lg"
            onClick={() => setShow("create")}
          >
            Create New
          </button>
        </div>
      </div>

      {show === 'create' && (
        <div className="mb-8 p-5">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Create a new voicemail box</h4>
          <p className="text-sm mb-2">To create a new voicemail box, enter a description for the box and select Create.</p>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              name="description"
              className="w-2/5 h-10 border rounded-l-lg px-4 focus:outline-none"
              value={voicemailData.description}
              onChange={handleInputChange}
              placeholder="Description for this voicemail box"
            />
            <button
              className="bg-[#382e62] h-10 w-28 flex justify-center items-center text-white rounded-lg"
              onClick={handleCreateNew}
            >
              Create
            </button>
          </div>
        </div>
      )}

      {show === "edit" && (
        <div className="mb-8 p-5">
          <h4 className="text-lg font-semibold text-gray-600 mb-4">Edit Voicemail Box</h4>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              name="description"
              className="w-2/5 h-10 border rounded-lg px-4 focus:outline-none"
              value={voicemailData.description}
              onChange={handleInputChange}
              placeholder="Description for this voicemail box"
            />

            <div>
              <label className="block text-sm">Email</label>
              <input
                type="email"
                name="email"
                className="w-2/5 h-10 border rounded-lg px-4 focus:outline-none"
                value={voicemailData.email}
                onChange={handleInputChange}
                placeholder="Email address"
              />
            </div>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="record_vm"
                checked={voicemailData.record_vm === 'yes'}
                onChange={handleInputChange}
              />
              <span>Allow caller to leave a message</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="notify_novm"
                checked={voicemailData.notify_novm === 'yes'}
                onChange={handleInputChange}
              />
              <span>Notify even if no message is left</span>
            </label>

            <button
              className="bg-[#382e62] h-10 w-28 flex justify-center items-center text-white rounded-lg mt-4"
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoicemailBox;