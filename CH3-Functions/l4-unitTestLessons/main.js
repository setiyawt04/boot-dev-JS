function getMonthlyPrice(tier) {
    // Your code here...
    switch (tier){
      case "basic":
        return 100 * 100
        break
      case "premium":
        return 150 * 100
        break
      case "enterprise":
        return 500 * 100
        break
      default:
        return 0
        break
    }
  }
  
  // don't touch below this line
  
  module.exports = { getMonthlyPrice };