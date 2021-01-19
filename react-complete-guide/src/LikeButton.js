import { Component } from 'react';


export default class LikeButton extends Component {
    constructor(props) {
    super(props);
    this.state = {
        count: 100,
        isLiked : false
        };
  }

    render() {
        let buttonClass = "like-button"
        if (this.state.isLiked) buttonClass += " liked"

        return (
            <>
                <div>
                    <button className={buttonClass} onClick={() => this.setState({ isLiked: !this.state.isLiked})}>Like | <span className="likes-counter">{this.state.isLiked ? '101' : '100'}</span></button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                   .likes-counter {
                       
                   }
                `}</style>
            </>
        );
    }
}