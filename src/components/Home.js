import React from 'react';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';
import '../stylesheets/Home.scss';
import PropTypes from 'prop-types';

class Home extends React.Component {
    render() {
        const { arrList, getReset, getInput, inputValue, selectValue, getSelect, getBloodValue, bloodValue } = this.props;
        return (
            <React.Fragment>
                {arrList && arrList.length ?
                    <React.Fragment>
                        <Header getReset={getReset} />
                        <Filters getInput={getInput} getSelect={getSelect} getBloodValue={getBloodValue}/>
                        <CharacterList arrList={arrList} inputValue={inputValue} selectValue={selectValue} bloodValue={bloodValue}/>
                        <img className="logo_footer" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png" alt="logo"></img>
                    </React.Fragment>
                    : <p className="loading">Cargando datos</p>
                }
            </React.Fragment>
        )
    }
}

Home.propTypes = {
    arrList: PropTypes.array,
    getReset: PropTypes.func,
    getInput: PropTypes.func,
    inputValue: PropTypes.string,
    selectValue: PropTypes.string,
    getSelect: PropTypes.func,
    getBloodValue: PropTypes.func,
    bloodValue: PropTypes.string

};

export default Home;