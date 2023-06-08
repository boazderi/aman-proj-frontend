import React, { useEffect, useState } from 'react'
import ListItemPreview from '../components/ListItemPreview'
import { contactService } from '../services/contact.service'

const CallHistory = () => {
  const [callHistoryList, setCallHistoryList] = useState([])

  useEffect(() => {

    const fetchCallHistory = async () => {
      const {contacts} = await contactService.query('history')
      const _callHistoryList = contacts
      console.log(_callHistoryList);
      setCallHistoryList(_callHistoryList)
    }

    fetchCallHistory()
  }, [])

  return (
    <section className='call-history call-list flex column'>
      {callHistoryList.length ? callHistoryList.map((callDetails) =>
       <ListItemPreview key={callDetails.id} callDetails={callDetails} />)  : ''}
    </section>
  )
}

export default CallHistory