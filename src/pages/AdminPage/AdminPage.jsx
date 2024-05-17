import useGetData from '../../hooks/useGetData'

const AdminPage = () => {
    const [user] = useGetData()

  return (
    <div className='adminPage'>
        <div className="adminPage__users">
        {
            user.map((people, i) => (
                <div key={i}>
                    <p>{people.name}</p>
                    <p>{people.email}</p>
                    <p>{people.password}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default AdminPage