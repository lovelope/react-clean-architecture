import React, { ReactNode } from 'react';
import './App.css';

interface Props {
  children: ReactNode;
}

export const AppWrapper = (props: Props) => {
  return <div className="App">{props.children}</div>;
};
