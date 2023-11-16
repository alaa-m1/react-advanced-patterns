import { Box, Typography } from "@mui/material";
import { CodeSection, ExternalLink } from "shared";

/**
 * You can review Higher Order Component Pattern example in the following repository and App
 * https://phoenix-ecommerce.netlify.app/modern-collection
 * https://github.com/alaa-m1/ecommerce-website-react-reactquery-redux/tree/master/src/shared/HOC
 */

export const CompoundPattern = () => {
  return (
    <Box>
      <Typography variant="h2" mb={1} sx={{ textAlign: "center" }}>
      Compound
      </Typography>
      <Typography color="primary.light" className="code-info">
        {`* Compound pattern is used when we have two or more components working together and one of them is a parent component while the rest is a child component. 
          * Compound components show relationships between components and allow them to work together to achieve a task.`}
      </Typography>
      <CodeSection>
        {`import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
            import { useTranslation } from "react-i18next";
            import _ from "lodash";
            import { useMemo } from "react";
            import { SortOptions } from "types";
            import { useSearchParams } from "react-router-dom";

            export const SortTypeSelect = (props: SortTypeSelectProps) => {
            const { t } = useTranslation();
            const [searchParams, setSearchParams] = useSearchParams();

            return (
                <FormControl variant="standard" sx={{ m: 1, width: 210 }}>
                <InputLabel htmlFor="sort_select_id" disableAnimation>
                    {t("sort.sort_by")}:
                </InputLabel>
                <Select
                    id="sort_select_id"
                    value={searchParams.get("sort") || "default"}
                    onChange={(e) => {
                    searchParams.set("sort", e.target.value as string);
                    setSearchParams(searchParams);
                    }}
                    label={t("sort.sort_by")}
                >
                    {props.options.map((item, index) => (
                    <MenuItem
                    value={item.value}
                    key={_.uniqueId()}
                    id={\`sort_by_\${item.value}\`}
                    >
                    <Typography color="primary.light">
                    {item.label}
                    </Typography>
                    </MenuItem>
                ))}
                </Select>
                </FormControl>
            );
            };

            type SortTypeSelectProps = {
            options: SortOptions;
            };
            `}
      </CodeSection>

      <Typography color="primary.light">
        To review the full example, you can check the following repository
        <br />
      </Typography>
      <ExternalLink url="https://github.com/alaa-m1/ecommerce-webapp-react-redux/blob/master/src/shared/components/FilterPanel/SortTypeSelect.tsx" />
    </Box>
  );
};
