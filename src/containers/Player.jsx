import React, { useLayoutEffect } from 'react'
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';
import '../assets/styles/components/Player.scss';
import NotFound from './NotFound';

const Player = (props) => {
    const { id } = props.match.params;
    const hasPlaying = Object.keys(props.playing).length > 0;

    useLayoutEffect(() => {
        props.getVideoSource(id);
    }, []);

    return hasPlaying ? (
        <section className='player'>
            <video className='player_item' controls autoPlay>
                <source src={props.playing.source} type='video/mp4' />
            </video>
            <div className='Player-back'>
                <button type='button' onClick={() => props.history.goBack()}>
                    Regresar
            </button>
            </div>
        </section>
    ) : <NotFound />;
};

const mapStateToProps = (state) => {
    return {
        playing: state.playing,
    }
};

const mapDispathToProps = {
    getVideoSource,
}

export default connect(mapStateToProps, mapDispathToProps)(Player);