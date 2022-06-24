import { FC, memo, useEffect } from "react";
import { connect } from "react-redux";
import { petsTypeFetch } from "../action";
import { petTypeSelector } from "../selectors";
import { State } from "../store";

type PetTypesProps = {
  petTypes: any[];
  fetchPetTypes: () => void;
};

const PetTypes: FC<PetTypesProps> = ({ petTypes, fetchPetTypes }) => {
  useEffect(() => {
    fetchPetTypes();
  }, []);

  return (
    <ul>
      {petTypes.map((p) => (
        <li key={p.cell}>{p.name.first}</li>
      ))}
    </ul>
  );
};

PetTypes.defaultProps = {};

const mapDispatchToProps = {
  fetchPetTypes: petsTypeFetch,
};

const mapStateToProps = (s: State) => {
  return { petTypes: petTypeSelector(s) };
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(PetTypes));
