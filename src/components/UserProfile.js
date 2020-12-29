import React from "react";

const UserProfile = ({ users, match }) => {
  const user = users.find((user) => user.id === +match.params.userId);
  const selectedUser = user ? (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src="https://www.gdc-hospital.com/wp-content/uploads/2016/08/no-profile-img.gif"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user.name}</h5>
              <h6>employee id: {user.id}</h6>

              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a href={match.url}>section 1</a>
              <br />
              <a href={match.url}>Line 2</a>
              <br />
              <a href={match.url}>Line 3</a>
              <p>SKILLS</p>
              <a href={match.url}>Skill 1</a>
              <br />
              <a href={match.url}>Skill 2</a>
              <br />
              <a href={match.url}>Skill 3</a>
              <br />
              <a href={match.url}>Skill 4</a>
              <br />
              <a href={match.url}>Skill 5</a>
              <br />
            </div>
          </div>
          <div className="col-md-8">
            <div className="tab-content profile-tab" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>User Id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.name}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phone</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.phone}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Web Site</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.website}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Address</label>
                  </div>
                  <div className="col-md-6">
                    <p>
                      {user.address.street} {user.address.suite}{" "}
                      {user.address.city} {user.address.zipcode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  ) : (
    <p> select a user</p>
  );

  return <div>{selectedUser}</div>;
};
export default UserProfile;
