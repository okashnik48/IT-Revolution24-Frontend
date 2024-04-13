"use client";

import React from "react";

import { Col, Input, Row} from "antd";
import { ChildInfo } from "./ChildInfo";


const ChildList = () => {

const arrayOfChildren = [
    {
      id: "1",
      money: 100,
      aliveFishCount: 5,
      deadFishCount: 2,
      starvingFishCount: 3,
      password: "password1",
      username: "user1",
      newMessages : ["232344", "234234"]
    },
    {
      id: "2",
      money: 200,
      aliveFishCount: 3,
      deadFishCount: 1,
      starvingFishCount: 1,
      password: "password2",
      username: "user2",
      newMessages : ["234", "234"]
    },
    {
      id: "3",
      money: 300,
      aliveFishCount: 7,
      deadFishCount: 0,
      starvingFishCount: 2,
      password: "password3",
      username: "user3",
      newMessages: []
    }
  ];
  return (
    <>
      <Row>
        <Col md={{ span: 12, offset: 6 }}>
          <h1>Child list</h1>
            {arrayOfChildren.map((post, index) => (
              <ChildInfo key = {post.id} child = {post} />
            )
            )}
        </Col>
      </Row>
    </>
  );
};
export default ChildList;
