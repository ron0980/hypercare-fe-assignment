import axios from "axios";
import { User } from "../types/types";

const API_URL = "https://9e06da9a-97cf-4701-adfc-9b9a5713bbb9.mock.pstmn.io/users";

interface ApiResponse {
  data: {
    users: User[];
  };
}

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<ApiResponse>(API_URL);
    return response.data.data.users;
  } catch (error) {
    console.error("Error fetching users");
    throw error
  }
};
