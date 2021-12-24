import React from "react";
import {getDataBase} from "../Api/Api";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import EditPage from "../../components/EditPage/EditPage";
import EditPageWrapper from "../EditPage/EditPageWraper";
import './ShoeApp.css'
import NavBar from "../NavBar/NavBar";



class ShoeApp extends React.Component {
        state = {data:[],isEdit:false}


    componentDidMount() {
            getDataBase().then((result)=>{
                this.setState({data:result.data},()=> console.log('dd',result.data))

            });

    }
//     handleEditPage=(e)=>{
//             if(this.satet.isEdit){
//                 return <EditPageWrapper id={e.target.value}/>
//             }
// }
    handleEditButton=(e)=>{
            console.log('f')
        console.log('111',e.target.current)
    }

    render() {
        return(
            <div>
                <BrowserRouter >
                <NavBar />
                    <Routes>
                        {/*<Route path='/' element ={<NavBar />} />*/}
                        <Route path='/' exact element={<HomePage data={this.state.data} callback={this.handleEditButton}/>} />
                        <Route path='/edit/:id' element={<EditPageWrapper />} />
                    </Routes>


                </BrowserRouter>

            </div>
        )
    }

}
export default ShoeApp