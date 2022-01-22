/* eslint-disable react/prop-types */

// Soft UI Dashboard React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

export default function data() {
  const Author = ({ name, email }) => (
    <MDBox display='flex' alignItems='center' lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display='block' variant='button' fontWeight='medium'>
          <div className='leader_participant_name'>{name}</div>
        </MDTypography>
        <MDTypography variant='caption'>
          <div className='leader_participant_email'>{email}</div>
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign='left'>
      <MDTypography variant='caption' color='black' fontWeight='light'>
        <div className='leader_participant_clg'>{title}</div>
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Participant", accessor: "author", width: "35%", align: "left" },
      { Header: "No. of events", accessor: "status", align: "center" },
      { Header: "College", accessor: "function", align: "left" },
      { Header: "Points", accessor: "employed", align: "center" },
    ],

    rows: [
      {
        author: <Author name='John Michael' email='john@creative-tim.com' />,
        function: <Job title='Manager' />,
        status: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_no_of_events'>2</div>
          </MDTypography>
        ),
        employed: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_score'>2304</div>
          </MDTypography>
        ),
      },
      {
        author: <Author name='John Michael' email='john@creative-tim.com' />,
        function: <Job title='Manager' />,
        status: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_no_of_events'>2</div>
          </MDTypography>
        ),
        employed: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_score'>2304</div>
          </MDTypography>
        ),
      },
      {
        author: <Author name='John Michael' email='john@creative-tim.com' />,
        function: <Job title='Manager' />,
        status: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_no_of_events'>2</div>
          </MDTypography>
        ),
        employed: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_score'>2304</div>
          </MDTypography>
        ),
      },
      {
        author: <Author name='John Michael' email='john@creative-tim.com' />,
        function: <Job title='Manager' />,
        status: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_no_of_events'>2</div>
          </MDTypography>
        ),
        employed: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_score'>2304</div>
          </MDTypography>
        ),
      },
      {
        author: <Author name='John Michael' email='john@creative-tim.com' />,
        function: <Job title='Manager' />,
        status: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_no_of_events'>2</div>
          </MDTypography>
        ),
        employed: (
          <MDTypography component='a' href='#' variant='caption' color='black' fontWeight='light'>
            <div className='leader_participant_score'>2304</div>
          </MDTypography>
        ),
      },
    ],
  };
}
