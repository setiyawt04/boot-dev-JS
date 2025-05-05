function createContact(
  phoneNumber = null,
  name = 'Anonymous',
  avatar = 'default.jpg'
) {
  return phoneNumber
    ? `Contact saved! Name: ${name}, Phone number: ${phoneNumber}, Avatar: /public/pictures/${avatar}`
    : 'Invalid phone number';
}
  
  // don't touch below this line
  
  module.exports = { createContact };
  