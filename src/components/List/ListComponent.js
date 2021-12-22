import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';

export default function ListComponent() {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }} className="m-2">
           <CardHeader
                avatar={
                    <Avatar
                        alt="Remy Sharp"
                        src={""}
                        sx={{ width: 56, height: 56 }}
                    />
                }
                title={"Name"}
            />
            </Card>
        </div>
    )
}
