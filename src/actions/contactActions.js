
const createContact = (name, number, uid) => {
    // Return action
    return {
      // Unique identifier
      type: 'Create_Contact',
      // Payload
      contact: {
          id: uid,
          name: name,
          number: number
      }
    }
  };

const deleteContact = (id) => {
    // Return action
    return {
      // Unique identifier
      type: 'Delete_Contact',
      // Payload
      id: id
    }
};

export { createContact, deleteContact }