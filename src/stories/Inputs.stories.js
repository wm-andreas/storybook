import React from 'react';
import {Inputs} from './Inputs';
export default {
    title: "WSG/Inputs",
    component: Inputs
}

export const Default = (props) => (
    <Inputs {...props} />
)
Default.args = {
    label: "First name",
    disabled: false,
    fullWidth: false
}
export const Required = (props) => (
    <Inputs required {...props} helperText="This field is required"/>
)
Required.args = {
    label: "Required field"
}

export const Error = (props) => (
    <Inputs required {...props} error helperText="This field is required"/>
)
Error.args = {
    label: "Required field"
}