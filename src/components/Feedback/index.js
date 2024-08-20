// Write your React code here.
import {Component} from 'react'
import './index.css'

const Getreactons = emojid => {
  const {name, imageUrl, reacted} = emojid
  return (
    <li className="li" onClick={reacted}>
      <img alt={name} className="img" src={imageUrl} />
      <p className="text">{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {ereact: false}

  reacted = () => {
    this.setState({ereact: true})
  }

  render() {
    const {ereact} = this.state
    const {resources} = this.props

    return (
      <div className="bg">
        <div className="card">
          {ereact ? (
            <div>
              <img
                className="love"
                src={resources.loveEmojiUrl}
                alt="love emoji"
              />
              <h1 className="head">Thank You!</h1>
              <p className="text">
                We will use your Feedback to improve our customer support
                performance.
              </p>
            </div>
          ) : (
            <>
              <h1 className="head">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="ul">
                {resources.emojis.map(each => (
                  <Getreactons
                    key={each.id}
                    reacted={this.reacted}
                    name={each.name}
                    imageUrl={each.imageUrl}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
