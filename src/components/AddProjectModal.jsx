﻿import React from "react";
import "antd/dist/antd.css";
import Modal from "antd/lib/modal/Modal";
import { Input, DatePicker } from "antd";
import axios from "axios";
import moment from "moment";
//import {useAuth0} from '@auth0/auth0-react'

class AddProjectModal extends React.Component {
    state = {
        projectName: "",
        projectRequirements: "",
        projectDesign: "",
        projectCompletionDate: "",
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault();
        //const { getAccessTokenSilently } = useAuth0();
        // const accessToken = await getAccessTokenSilently( {
        //     audience: process.env.REACT_APP_AUDIENCE
        // });
        console.log(this.state)
        axios
            .post(`https://myportfolio-wyattb.herokuapp.com/api/project`, 
            this.state)
            // {
            //     headers: {
            //         Authorization: `Bearer ${accessToken}`
            //     }
            // })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }



    render() {
        const { projectName, projectRequirements, projectDesign, projectCompletionDate } = this.state;
        const dateFormat = "M-D-YYYY";
        return (
            <div>
                <Modal
                    title="New Project"
                    visible={this.props.visible}
                    onCancel={this.props.onCancel}
                    onOk={this.handleSubmit} >
                    <form>
                        <Input value={projectName} name="projectName" onChange={this.handleChange} placeholder="Project Name"></Input>
                        <Input value={projectRequirements} name="projectRequirements" onChange={this.handleChange} placeholder="Project Requirements"></Input>
                        <Input value={projectDesign} name="projectDesign" onChange={this.handleChange} placeholder="Project Design"></Input>
                        <DatePicker value={
                            projectCompletionDate === ""
                                ? ""
                                : moment(projectCompletionDate, dateFormat)
                        }
                            format={dateFormat}
                            onChange={(date, dateString) => {
                                this.setState({ projectCompletionDate: dateString });
                            }}></DatePicker>
                    </form>
                </Modal>
            </div>
        );
    }
}
export default AddProjectModal