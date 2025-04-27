using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GasGenerator : MonoBehaviour
{
    [SerializeField] private GameObject gasPrefab;
    [SerializeField] private float minX, maxX;
    [SerializeField] private float minY, maxY;
    [SerializeField] private float spawnTime;
    void Start()
    {
        InvokeRepeating("Spawn", 1f, spawnTime);
    }

    private void Spawn()
    {
        Vector2 position = new Vector2(Random.Range(minX, maxX), Random.Range(minY, maxY));
        GameObject temp = Instantiate(gasPrefab, position, Quaternion.identity);
        temp.transform.SetParent(transform);
    }
}
