import { ProfileGetColumnsHead, ProfileGetColumns } from './profile.schema';
import { ProfileDetailsGetColumnsHead, ProfileDetailsGetColumns } from './profile.details.schema';

export default {
  PROFILE: {
    getColumnsHead: () => ProfileGetColumnsHead(),
    getColumns: () => ProfileGetColumns(),
  },
  PROFILE_DETAILS: {
    getColumnsHead: () => ProfileDetailsGetColumnsHead(),
    getColumns: () => ProfileDetailsGetColumns(),
  },
};
