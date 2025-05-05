function mess(a) {
    return `TEXTIO: ${a}`
  }

  function reformat(message, formatter) {
    let formattedMessage = message;
    formattedMessage = formatter(formatter(formatter(message)))
  
    return mess(formattedMessage);
    
  }
  
  // don't touch below this line
  
  module.exports = { reformat };
  