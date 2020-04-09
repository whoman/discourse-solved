import FilterComponent from "admin/components/report-filters/filter";

export default FilterComponent.extend({
  value: null,

  actions: {
    onChange(value) {
      this.applyFilter(this.get("filter.id"), !!value);
    },
  },
});
