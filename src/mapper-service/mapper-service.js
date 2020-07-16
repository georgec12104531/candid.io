export function mapCandidatesForFrontEnd(candidates) {
  return candidates.reduce((result, { id, name, website }) => {
    let newCandidateObj = {
      id,
      name,
      website,
    };

    result.push(newCandidateObj);
    return result;
  }, []);
}
