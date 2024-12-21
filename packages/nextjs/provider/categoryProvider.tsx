import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

type CategoryItem = {
  label: string;
  href: string;
};

type CategoryProviderProps = {
  children: React.ReactNode;
};

type ICategoryState = {
  category: string;
  setCategory: Dispatch<SetStateAction<string>>;
  categories: Array<CategoryItem>;
  setCategories: Dispatch<SetStateAction<CategoryItem[]>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const CategoryContext = createContext<ICategoryState | null>(null);

export function useCategoryContext() {
  return useContext(CategoryContext) as ICategoryState;
}

export const CategoryProvider = ({ children }: CategoryProviderProps) => {
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState<Array<CategoryItem>>([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      // 使用静态数据替代 API 调用
      const staticCategories: CategoryItem[] = [
        { label: "Bitcoin Whitepaper", href: "/" },
        { label: "Info 论文链上信息", href: "/?show_info=true" },
        { label: "About 关于", href: "https://en.wikipedia.org/wiki/Satoshi_Nakamoto" }, 
        { label: "Gen RSS 生成 RSS 源", href: "TODO" }, 
      ];
      // const allCategory: CategoryItem = { label: "All 全部", href: "/" };
      // const categoriesArray = [allCategory, ...staticCategories];
      setCategories(staticCategories);
    } catch (error) {
      console.error("加载类别时出错:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <CategoryContext.Provider value={{ category, setCategory, categories, setCategories, loading, setLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};
