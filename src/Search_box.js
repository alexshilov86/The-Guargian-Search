import { React, useState } from "react";
import './style.css';

import { ArrowRightIcon, ArrowForwardIcon, ArrowBackIcon } from '@chakra-ui/icons'
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
function getDataFromApi(searchtext, setData, page) {
    let url = "https://content.guardianapis.com/search?page=" + page + "&q=" + searchtext + "&api-key=" + apy_key_guardian
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
                        props.setcurrentpage(1);
                        let searchtext = document.getElementById('searchtext').value;
                        getDataFromApi(searchtext, props.handleClick, 1);
                    }}>
                        Show
                    </Button>
                </InputRightElement>
            </InputGroup>
        </div>
    )
}
function NextResults(props) {
    let class_name = props.visibility > 0 ? "nextbuttonvisible" : "nextbuttonunvisible";
    let arrowbackclsname = props.page > 1 ? "arrowbackvisible" : "arrowbackunvisible";
    return (
        <div className={class_name}>
            <ArrowBackIcon className={arrowbackclsname} w={9} h={6} color="black.400" onClick={() => {
                let newpage = Math.max(1, props.page - 1);
                props.handleClick(newpage);
                let searchtext = document.getElementById('searchtext').value;
                getDataFromApi(searchtext, props.updateresults, newpage);
            }} />
            <span> Results {props.page * 10 - 9} - {props.page * 10} </span>
            <ArrowForwardIcon w={9} h={6} color="black.400" onClick={() => {
                props.handleClick(props.page + 1);
                let searchtext = document.getElementById('searchtext').value;
                getDataFromApi(searchtext, props.updateresults, props.page+1);
            }} 
            />
        </div>
    )
}

function SearchTable(props) {
    const [currentpage, setCurrentpage] = useState(1);
    const [result, setResult] = useState([]);
    return (
        <div className="searchtable">
            <InputSearch handleClick={setResult} setcurrentpage={setCurrentpage}/>
            <div className="findtable">
                {result.map(e => <SearchBox data={e} />)}
            </div>
            <NextResults page={currentpage} handleClick={setCurrentpage} updateresults={setResult} visibility = {result.length}/>
        </div>
    )
}
export default SearchTable;