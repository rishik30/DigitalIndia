import React, {Component} from 'react'
import Svg from '../../components/svg.jsx'

export class Information extends Component {

    render() {
        let mission = (this.props.data) ? (this.props.data.mission) : "Enable the disadvantaged, sustainable access to legislative rights"
        let vision = (this.props.data) ? (this.props.data.vision) : "Our vision is to enroll 1 million students by 2020 through the Project Eklavya Network"
        return(
            <section className="information">
                <article className="article">
                    <div className="icon">
                        <Svg src="/img/home/mission-icon.svg" />
                    </div>
                    <div className="content">
                        <h2>mission</h2>
                        <p dangerouslySetInnerHTML={{__html: mission}} />
                    </div>
                </article>
                <article className="article">
                    <div className="icon">
                        <Svg src="/img/home/vision-icon.svg" />
                    </div>
                    <div className="content">
                        <h2>vision</h2>
                        <p dangerouslySetInnerHTML={{__html: vision}}/>
                    </div>
                </article>
            </section>
        )
    }
}
