using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SpawnerScript : MonoBehaviour
{
    [SerializeField] GameObject gas;

    IEnumerator Spawn()
    {
        while (true)
        {
            Vector2 topleftCorner = Camera.main.ViewportToWorldPoint(new Vector2(0, 1));
            Vector2 bottomrightCorner = Camera.main.ViewportToWorldPoint(new Vector2(1, 0));

            float x = Random.Range(topleftCorner.x, bottomrightCorner.x);
            float y = Random.Range(bottomrightCorner.y, topleftCorner.y);

            Vector3 spawnPos = new Vector3(x, y, 0);

            Instantiate(gas, spawnPos, Quaternion.identity);

            yield return new WaitForSeconds(Random.Range(1f, 3f));
        }
    }

    private void Start()
    {
        StartCoroutine(nameof(Spawn));  
    }
}
