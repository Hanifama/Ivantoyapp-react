import users from "./images/avatar.png"

export const userColumns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },  
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


//temporary data
export const userRows = [
  {
    id: 197823237097,
    username: "tes",
    img: users,
    status: "active",
    email: "tes@co.id",    
  },
  {
    id: 1390987536289,
    username: "webtest",
    img: users,
    email: "web@gmail.com",
    status: "passive",    
  },
  {
    id: 198987665054,
    username: "hars",
    img: users,
    email: "hars@gmail.com",
    status: "pending",    
  },

];
