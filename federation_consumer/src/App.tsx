import React, { useState, useEffect } from 'react';

import ProviderButton from 'federation_provider/button';
import Input from 'federation_provider/input';
import Card from 'federation_provider/card';
import Tooltip from 'federation_provider/tooltip';
import Modal from 'federation_provider/modal';
import Checkbox from 'federation_provider/checkbox';
import applyStyles from 'federation_provider/styles';
import RemoteComponent from './remoteComponent';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    applyStyles();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <h1>Design System Example</h1>
      <p>Remote component from provider</p>
      <RemoteComponent>
        <Card title="Example Card">
          <p>This is a card component with some content.</p>
          <RemoteComponent>
            <Input value={inputValue} onChange={handleInputChange} placeholder="Type something..." />
          </RemoteComponent>
          <RemoteComponent>
            <Checkbox label="Check me" checked={isChecked} onChange={handleCheckboxChange} />
          </RemoteComponent>
          <RemoteComponent>
            <ProviderButton label="Open Modal" onClick={toggleModal} />
          </RemoteComponent>
          <RemoteComponent>
            <Tooltip content="This is a tooltip">
              <span>Hover over me</span>
            </Tooltip>
          </RemoteComponent>
        </Card>
      </RemoteComponent>
        <Modal isOpen={isModalOpen} onClose={toggleModal} title="Example Modal">
          <p>This is a modal component.</p>
          <ProviderButton label="Close Modal" onClick={toggleModal} />
        </Modal>
    </div>
  );
};

export default App;
