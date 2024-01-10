import { db } from "../db.js";

export const getCompetitions = (req, res) => {
  const query = "SELECT * FROM competitions";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data);
  });
};

export const addCompetitions = (req, res) => {
  const query =
    "INSERT INTO competitions(compName, maxTeamMember, minTeamMember, fees, picture, description) VALUES (?)";
  const values = [
    req.body.compName,
    req.body.maxTeamMember,
    req.body.minTeamMember,
    req.body.fees,
    req.body.picture,
    req.body.description,
  ];
  db.query(query, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Competition Added");
  });
};

export const updateCompetitions = (req, res) => {
  const id = req.params.id;
  const query =
    "UPDATE competitions SET compName = ?, maxTeamMember = ?, minTeamMember = ?, fees = ?, picture = ?, description = ?";
  const values = [
    req.body.compName,
    req.body.maxTeamMember,
    req.body.minTeamMember,
    req.body.fees,
    req.body.picture,
    req.body.description,
  ];
  db.query(query, [...values, id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Competition Updated");
  });
};

export const deleteCompetitions = (req, res) => {
  const id = req.params.id;
  const query = "DELETE FROM competitions WHERE competitionID = ?";
  db.query(query, id, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.json("Competition Deleted.");
  });
};
