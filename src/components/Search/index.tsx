import React, {useState, useCallback} from 'react';
import { useDispatch } from 'react-redux';
import getNameInfo from '../../api/getNameInfo';
import { ADD_HISTORY_ITEM } from '../../store/history/types';

const SearchPage: React.FC<any> = () => {
    const [resultMode, setResultMode] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [resultCountry, setResultCountry] = useState('');
    const [resultGender, setResultGender] = useState('');
    const dispatch = useDispatch();

    const handleClickButton = useCallback(
        async () => {
            if(resultMode) {
                setInputValue('');
                setResultCountry('');
                setResultGender('');
            } else {
                if(inputValue) {
                    const [country, gender] = await getNameInfo(inputValue);
                    if(country && gender) {
                        setResultCountry(country);
                        setResultGender(gender);
                        dispatch({
                            type: ADD_HISTORY_ITEM,
                            payload: {
                                name: inputValue,
                                gender,
                                country,
                            }
                        });
                    }
                }
            }
            setResultMode(!resultMode);
        },
        [
            resultMode,
            setResultMode,
            inputValue,
            setInputValue,
            setResultCountry,
            setResultGender,
            dispatch,
        ],
    );

    return (
        <div className='search-container'>
            {!resultMode ? (
                <>
                    <span>Enter name: </span>
                    <input
                        type='text'
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                    />
                </>
            ) : (
                <>
                    <h2>{`You entered: ${inputValue}`}</h2>
                    <h2>{`Description:`}{resultCountry && resultGender &&` ${inputValue} is a ${resultGender} from the ${resultCountry}`}</h2>
                </>
            )}
            <button onClick={handleClickButton} disabled={!inputValue}>
                {resultMode ? 'Enter another name' : 'Submit'}
            </button>
        </div>
    );
  }
  
  export default SearchPage;