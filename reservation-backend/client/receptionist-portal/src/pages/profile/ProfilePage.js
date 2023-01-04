import React from 'react';

import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link } from '@mui/material';
import Button from '@mui/material/Button'

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: '#eee' }}>
      <Container className="py-5">
        <Grid>
          <Grid>
            <Breadcrumbs className="bg-light rounded-3 p-3 mb-4">
              <Link>
                <a href='#'>Home</a>
              </Link>
              <Link>
                <a href="#">User</a>
              </Link>
              <Link active>User Profile</Link>
            </Breadcrumbs>
          </Grid>
        </Grid>

        <Grid>
          <Grid lg="4">
            <Card className="mb-4">
              <CardContent className="text-center">
                <CardMedia
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid 
                />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                  <Button>Follow</Button>
                  <Button outline className="ms-1">Message</Button>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid lg="8">
            <Card className="mb-4">
              <CardContent>
                <Grid>
                  <Grid sm="3">
                    <h2>Full Name</h2>
                  </Grid>
                  <Grid sm="9">
                    <h2 className="text-muted">Johnatan Smith</h2>
                  </Grid>
                </Grid>
                <hr />

                <Grid>
                  <Grid sm="3">
                    <h2>Email</h2>
                  </Grid>
                  <Grid sm="9">
                    <h2 className="text-muted">example@example.com</h2>
                  </Grid>
                </Grid>
                <hr />

                <Grid>
                  <Grid sm="3">
                    <h2>Phone</h2>
                  </Grid>
                  <Grid sm="9">
                    <h2 className="text-muted">(097) 234-5678</h2>
                  </Grid>
                </Grid>
                <hr />

                <Grid>
                  <Grid sm="3">
                    <h2>Mobile</h2>
                  </Grid>
                  <Grid sm="9">
                    <h2 className="text-muted">(098) 765-4321</h2>
                  </Grid>
                </Grid>
                <hr />

                <Grid>
                  <Grid sm="3">
                    <h2>Address</h2>
                  </Grid>
                  <Grid sm="9">
                    <h2 className="text-muted">Bay Area, San Francisco, CA</h2>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}