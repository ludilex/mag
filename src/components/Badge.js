import React from 'react'

const GOLDEN_BADGE = "img/badge_gold.png"
const SILVER_BADGE = "img/badge_silver.png"
const BRONZE_BADGE = "img/badge_bronze.png"
const LOCKED_BADGE = "img/badge_locked.png"

class Badge extends React.Component {
  render() {
    var url = ""
    switch (this.props.badgeType) {
      case 'GOLDEN_BADGE':
          url = GOLDEN_BADGE
        break;
      case 'SILVER_BADGE':
          url = SILVER_BADGE
        break;
      case 'BRONZE_BADGE':
          url = BRONZE_BADGE
        break;
      case 'LOCKED_BADGE':
          url = LOCKED_BADGE
        break;
      default:
          return false
    }
    return(
      <img
        src={url}
        alt={this.props.badgeName}
        style={{width: "100px"}}/>
    )
  }
}

export default Badge
