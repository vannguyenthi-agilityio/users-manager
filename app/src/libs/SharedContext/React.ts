import { useEffect, useState } from 'react';
import { get, Readable } from 'svelte/store';

export function useSharedContext<Value>(selector: Readable<Value>) {
  const initialValue = get(selector);
  const [user, setUser] = useState(initialValue);

  useEffect(() => {
    selector.subscribe(setUser);
  }, []);

  return user;
}
