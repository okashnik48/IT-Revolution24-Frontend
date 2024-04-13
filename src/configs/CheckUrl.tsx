import React from "react";
import { useParams } from "react-router-dom";
import userService from "../services/user.service";
import { SetIsRegistered } from "../store/slices/user";
import { useAppDispatch } from "../store/store-hooks";

export const CheckUrl = () =>{
    const { code } = useParams();
    const dispatch = useAppDispatch();
    const [verifyCodeHandller] = userService.useVerifyCodeMutation();

      verifyCodeHandller(parseInt(code as string )).then(() =>{
        dispatch(SetIsRegistered(true))
      })
    return (
      <div>234234</div>
    )
  }