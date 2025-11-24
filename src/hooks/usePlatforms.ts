import platforms from "../data/platforms";

export interface Platform {
  id: number;
  name: string;  
  slug: string;
}

//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
//const usePlatforms = ()=> ({data: platforms, isLoading: false, error: null});
const usePlatforms = (): {
  data: Platform[];
  isLoading: boolean;
  error: string | null;
} => ({
  data: platforms,
  isLoading: false,
  error: null,
});

export default usePlatforms;


