import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <Result
        status="404"
        title="404 Not found"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Button type="primary" onClick={() => navigate("/")}>Back Home</Button>} />
    </div>
  );
}
