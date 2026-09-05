const inputClass =
  "w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[#146394] placeholder:text-gray-400 font-bold";

const FormInput = ({
  label,
  value,
  onChange,
  required = false,
  maxLength,
  minLength,
  inputMode,
  dir = "ltr",
  placeholder,
  numeric = false,
  info,
  infoLabel,
  type = "text",
  rounded = "full",
  disabled = false,
}) => {
  return (
    <label className="flex w-full flex-col gap-1.5 text-sm font-bold text-[#146394]">
      <span>{label}</span>
      <div className="relative">
        <input
          required={required}
          type={type}
          dir={dir}
          inputMode={inputMode}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder || label}
          className={`${inputClass} ${rounded === "xl" ? "rounded-xl" : "rounded-full"} ${dir === "ltr" ? "text-right" : "text-left"} ${disabled ? "bg-[#203fed17]! cursor-not-allowed" : ""}`}
          value={value}
          onChange={(e) => {
            const next = e.target.value;
            if (numeric && !/^\d*$/.test(next)) return;
            onChange(next);
          }}
        />
        {info ? (
          <span
            className="absolute inset-y-0 end-3 flex items-center text-[#146394]"
            title={infoLabel || info}
            aria-label={infoLabel || info}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v6M12 8h.01" strokeLinecap="round" />
            </svg>
          </span>
        ) : null}
      </div>
    </label>
  );
};

export default FormInput;
export { inputClass };
