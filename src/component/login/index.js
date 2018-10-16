import { Form, Icon, Input, Button } from 'antd';
import React from "react";

const FormItem = Form.item;

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends React.Component{

    componentDidMount(){
        console.log("------componentDidMount------")
        this.props.form.validateFields();
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if (!err){
                console.log('Received values of form: ',values);
            }
        });
    }

    render(){
        const {getFieldDecorator,getFieldsError,getFieldError,isFieldTouched}=this.props.form;

        const userNameError = isFieldTouched('userName')&&getFieldError('userName');
        const passwordError = isFieldTouched('password')&&getFieldError('password');

        return (
            <Form  layout="inline" onSubmit={this.handleSubmit} >
                <FormItem
                    validateStatus={userNameError ? 'error':''}
                    help = {userNameError || ''}
                >
                    {getFieldDecorator('userName',{
                        rules:[{required:true,message:'please input your username'}],
                    })(
                        <input prefix={<Icon type = "user" style={{color:'rgba(0,0,0,.25)'}}/>}/>
                    )}
                </FormItem>
                <FormItem
                    validateStatus={passwordError ? 'error' : ''}
                    help={passwordError || ''}
                >
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button
                        type="primary"
                        htmlType="submit"
                        disabled={hasErrors(getFieldsError())}
                    >
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedLogin = Form.create()(Login);

export default WrappedLogin;




{/*<div className="content">*/}
    {/*<div className="list-block">*/}
        {/*<ul>*/}
            {/*<li>*/}
                {/*<div className="item-content">*/}
                    {/*<div className="item-media">*/}
                        {/*<i className="icon icon-form-name"></i>*/}
                    {/*</div>*/}
                    {/*<div className="item-inner">*/}
                        {/*<div className="item-title label">用户名</div>*/}
                        {/*<div className="item-input">*/}
                            {/*<input type="text" ref="userName" placeholder="your name"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</li>*/}
            {/*<li>*/}
                {/*<div className="item-content">*/}
                    {/*<div className="item-media">*/}
                        {/*<i className="icon icon-form-password"></i>*/}
                    {/*</div>*/}
                    {/*<div className="item-inner">*/}
                        {/*<div className="item-title label">密码</div>*/}
                        {/*<div className="item-input">*/}
                            {/*<input type="password" ref="pwd" placeholder="password"/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</li>*/}
        {/*</ul>*/}
    {/*</div>*/}
    {/*<div className="content-block">*/}
        {/*<div className="row">*/}
            {/*<button onClick={()=>{*/}
                {/*this.userLogin();*/}
            {/*}}>登录</button>*/}
            {/*/!*<div className="col-100"><a onClick={()=>{*!/*/}
            {/*/!*this.userLogin()*!/*/}
            {/*/!*}} className="button button-big button-fill button-success">登录</a></div>*!/*/}
        {/*</div>*/}
    {/*</div>*/}
{/*</div>*/}