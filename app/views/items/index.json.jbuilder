json.array!(@items) do |item|
  json.extract! item, :id, :list, :title, :done
  json.url item_url(item, format: :json)
end
