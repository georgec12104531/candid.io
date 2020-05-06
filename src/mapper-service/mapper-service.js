export function mapCandidatesForFrontEnd(candidates) {
  return candidates.reduce(
    (result, { id, created_at, first_name, last_name, credit_indicator }) => {
      let newCandidateObj = {
        id,
        createdAt: created_at,
        firstName: first_name,
        lastName: last_name,
        creditIndicator: credit_indicator,
      };

      result.push(newCandidateObj);
      return result;
    },
    []
  );
}
