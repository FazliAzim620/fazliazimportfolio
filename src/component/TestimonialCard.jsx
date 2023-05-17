import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import profile from "../assets/profile.webp"
export default function TestimonialCard({data}) {


  return (
 

    <Card sx={{ maxWidth: 345,mt:'1rem' ,minHeight:'200px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor:'gray' }} aria-label="recipe">
          <CardMedia
        component="img"
        height="194"
        image={data?.pic  ?data?.pic:profile}
        alt="client image"
        sx={{ objectFit: "contain" }}
      />
          </Avatar>
        }
     
        title={data?.name}
        subheader={data?.designatoin}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
        {data?.message}
        </Typography>
      </CardContent>
    </Card>
  );
}