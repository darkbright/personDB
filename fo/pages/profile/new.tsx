import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload,Button, Form, Input, DatePicker, Space, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import React, { useState } from 'react';

// info form
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

// date picker
const onChange: DatePickerProps['onChange'] = (date, dateString) => {
  console.log(date, dateString);
};

// category selection
const { Option } = Select;

// upload
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const New = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  // info form
  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <Form {...layout} 
        name="nest-messages" 
        onFinish={onFinish} 
        validateMessages={validateMessages}
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
            name="Photo url"
            label="Photo Url"
            rules={[ { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
          >
          <Input placeholder="input placeholder" />
        </Form.Item>

        {/* Photo upload */}
        <span >
          Photo upload:
     
          <div style={{ marginLeft: 95, marginBottom:20}}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar"/> : uploadButton}
            </Upload>
          </div>
        
        </span>
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