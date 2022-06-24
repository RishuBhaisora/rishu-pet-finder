import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { petsTypeFetch } from "../action";

type PetTypesProps = {
  fetchPetTypes: () => void;
};

const PetTypes: FC<PetTypesProps> = ({ fetchPetTypes }) => {
  useEffect(() => {}, []);
  const fetchTypes = () => {
    fetchPetTypes();
  };
  return <button onClick={fetchTypes}>PET TYPES</button>;
};

PetTypes.defaultProps = {};

const mapDispatchToProps = {
  fetchPetTypes: petsTypeFetch,
};

export default connect(undefined, mapDispatchToProps)(memo(PetTypes));
