import Router from 'next/router';
import { Button, Form, Input, DatePicker, Space, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import React from 'react';

// info form
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


// date picker
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};


const New = (props: any) => {
  const onFinish = async (values: any) => {
    const requestOption = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values.user)
    };

    const result = await (await fetch("/api/profile", requestOption)).json();

    if (result.id) {
      Router.push(`/profile/${result.id}`);
    }
  };

  return (
    <>
      <Form {...layout} 
        name="nest-messages" 
        onFinish={onFinish} 
        size= "middle"
        style={{float: "left"}}
      >

        {/* Name input */}
        <Form.Item name={['user', 'name']} label="Name" rules={[{ type: 'string' }]}>
          <Input />
        </Form.Item>

        {/* Eng Name input */}
        <Form.Item name={['user', 'engName']} label="English name" rules={[{ type: 'string' }]}>
          <Input />
        </Form.Item>

        {/* Occupation input */}
        <Form.Item name={['user', 'occupation']} label="Occupation" rules={[{ type: 'string' }]}>
          <Input />
        </Form.Item>

        {/* Birthday picker */}
        <span style={{marginLeft: 30}}>
          Birthday:
          <DatePicker onChange={onChange} style={{marginLeft: 5, marginBottom: 20}}/>
        </span>
        {/* MBTI input */}
        <Form.Item name={['user', 'mbti']} label="MBTI" rules={[{ type: 'string' }]}>
          <Input />
        </Form.Item>

        {/* Enneagram input */}
        <Form.Item name={['user', 'enneagram']} label="Enneagram" rules={[{ type: 'string' }]}>
          <Input />
        </Form.Item>

        {/* Photo Url */}
        <Form.Item
            name={['user', 'imageUrl']}
            label="Image Url"
            rules={[ { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
          >
          <Input placeholder="input placeholder" />
        </Form.Item>

        {/* Add Button */}
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>
  )
};

export default New;