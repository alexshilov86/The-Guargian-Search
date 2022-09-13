import React from "react";
import './style.css';
import results from "./Results";
import { ArrowRightIcon } from '@chakra-ui/icons'
import { Input, InputRightElement, Button, InputGroup } from '@chakra-ui/react'
let apy_key_guardian = "db361477-2110-4756-ab04-d1ee6dee873c";
function SearchBox(props) {
    return (
        <div key={props.data.id} className="searchbox">
            <div className="summary_style">
                <span className="sectionname">{props.data.sectionName}</span>
                <span className="type_style">{props.data.type}</span>
                <span className="type_style">{props.data.webPublicationDate}</span>
            </div>
            <span className="text_style">
                {props.data.webTitle}
            </span>
            <a href={props.data.webUrl} target="blank"><ArrowRightIcon w={7} h={3} color="blue.400" /></a>
        </div>
    )
}
function getDataFromApi(searchtext, setData) {
    let url = "https://content.guardianapis.com/search?q=" + searchtext + "&api-key=" + apy_key_guardian
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            setData(data.response["results"]);
        });

}
function InputSearch(props) {
    return (
        <div>
            <InputGroup size='md'>
                <Input id="searchtext" placeholder='text for search' />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={() => {
                        let searchtext = document.getElementById('searchtext').value;
                        // let url = "https://content.guardianapis.com/search?q=" + searchtext + "&api-key=" + apy_key_guardian
                        // fetch(url)
                        //     .then((response) => {
                        //         return response.json();
                        //     })
                        //     .then((data) => {
                        //         props.handleClick(data.response["results"]);
                        //     });
                        getDataFromApi(searchtext, props.handleClick);
                    }}>
                        Show
                    </Button>
                </InputRightElement>
            </InputGroup>
        </div>
    )
}

function SearchTable(props) {
    return (
        <div className="searchtable">
            <InputSearch handleClick={props.fillresults} />
            <div className="findtable">
                {props.data.map(e => <SearchBox data={e} />)}
            </div>
        </div>
    )
}
export default SearchTable;