import React from 'react';
import { Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';

export const ElementTree = ({treeData, selected}) => (
  <Tree
    showIcon
    defaultExpandAll
    defaultSelectedKeys={treeData[0].title}
    switcherIcon={<DownOutlined />}
    treeData={treeData}
  />
);