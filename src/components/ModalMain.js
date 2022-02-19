import React, { useState } from 'react';
import { Modal, Button, Group, Input } from '@mantine/core';

const ModalMain = ({opened}) => {


  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        <Input variant="default" placeholder="Default variant" />
      </Modal>

      <Group position="center">
      </Group>
    </>
  );
}

export default ModalMain